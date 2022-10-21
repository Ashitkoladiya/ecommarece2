import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { addCategory, Deletecategory, getCategory, updatecategory } from '../../redux/action/category.action';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { addProduct, DeleteProduct, getProduct, updateProduct } from '../../redux/action/product.action';

function ProductAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [Update, setUpdate] = React.useState();
    const [filter, setfilterdata] = React.useState(false);
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = React.useState();
    const [uid, setUid] = React.useState();
    const dispatch = useDispatch();

    const productsdata = useSelector(state => state.product);
    const categorydata = useSelector(state => state.category)
    console.log(productsdata.product);



    const handleClickDopen = (id) => {
        setDopen(true);
        setDid(id);
    };

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        formik.resetForm(

        );
    };


    let product = {
        productname: yup.string().required('enter productname'),
        file: yup.mixed().required('please upload file'),
        price: yup.string().required('please enter price'),
        categoryname: yup.string().required('please select categoryname'),

    }


    let schema = yup.object().shape(product);

    const formik = useFormik({
        initialValues: {
            productname: '',
            file: '',
            price: '',
            categoryname: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            console.log(value);
            if (Update) {
                handleupdate(value)
            } else {
                handleSubmitdata(value)
            }
            resetForm();
        }
    })
    const handleDelete = (id) => {
        // let localData = JSON.parse(localStorage.getItem('medicine'));
        // let filterData = localData.filter((v, i) => v.id !== id);
        // localStorage.setItem("medicine", JSON.stringify(filterData))
        dispatch(DeleteProduct(did))
        loadData()
        setDopen(false);
        console.log(id);
    }

    const handleEdit = (params) => {
        setOpen(true);
        setUpdate(true);
        console.log(params);
        formik.setValues({
            ...params,
            productname: params.productname,
            file: params.url,
            fileName: params.fileName,
            price: params.price,
            categoryname: params.categoryname

        });
        setUid(params)
        // console.log(data);
    }

    console.log(formik.errors);
    const handleupdate = (value) => {
        // let localdata = JSON.parse(localStorage.getItem("medicine"));

        // let udata = localdata.map((l, i) => {
        //   if (l.id === value.id) {
        //     return value;
        //   } else {
        //     return l;
        //   }
        // })
        // console.log(udata);

        // localStorage.setItem("medicine", JSON.stringify(udata))

        // console.log(value);
        dispatch(updateProduct(value))
        setOpen(false)
        setUpdate()
        loadData()
    }

    const handleSearch = (val) => {
        // let localdata = JSON.parse(localStorage.getItem("users"))

        let fdata = productsdata.product.filter((d) => (
            d.id.toString().includes(val) ||
            d.productname.toString().toLowerCase().includes(val.toLowerCase()) ||
            d.categoryname.toString().includes(val.toLowerCase()) ||
            d.price.toString().includes(val)


        ))

        console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    }

    const handleSubmitdata = (value) => {
        // let localdata = JSON.parse(localStorage.getItem("medicine"));

        // let udata = {
        //   id: Math.floor(Math.random() * 1000),
        //   ...value
        // }

        // console.log(udata);

        dispatch(addProduct(value))


        // if (localdata === null) {
        //   localStorage.setItem("medicine", JSON.stringify([data]))
        // } else {
        //   localdata.push(data)
        //   localStorage.setItem("medicine", JSON.stringify(localdata))
        // }

        setOpen(false);
        loadData()

    }

    const loadData = () => {
        setData(productsdata.product)
    }


    React.useEffect(
        () => {
            loadData()
            dispatch(getProduct(data))
            dispatch(getCategory(data))

        }, []
    )



    const columns = [

        { field: 'id', headerName: 'id', width: 130 },
        { field: 'productname', headerName: 'ProductName', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'categoryname', headerName: 'categoryname', width: 130 },

        {
            field: 'url', headerName: 'images', width: 130,

            renderCell: (params) => (
                <img src={params.row.url} width={50} height={50} />
            )

        },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        }
    ];


    console.log(formik.errors);
    return (
        <>
            <Box>
                <Container>
                    <div>
                        <center>
                            <Button variant="outlined mt-5 pt-5" onClick={() => handleClickOpen()}>
                                Add Product
                            </Button>

                        </center>

                        <div className="form-group mt-3 col-lg-12">
                            <TextField
                                type="text"
                                id='search'
                                label='search'
                                variant='standard'
                                values="values"
                                onChange={(e) => handleSearch(e.target.value)}

                            />
                            <div className="validate" />
                        </div>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={productsdata.product}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />

                        </div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Add Product</DialogTitle>
                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <DialogContent>
                                        <TextField
                                            margin="dense"
                                            id="productname"
                                            label="Product Name"
                                            name="productname"
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.productname}
                                            helperText={formik.errors.productname}
                                            error={formik.errors.productname ? true : false}

                                        />
                                        {/* 
                                        <TextField
                                            margin="dense"
                                            id="category"
                                            name="category"
                                            label="category"
                                            placeholder='Category'
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.category}
                                            helperText={formik.errors.category}
                                            error={formik.errors.category ? true : false}

                                        >
                                        </TextField> */}

                                        <TextField
                                            className='mb-3'
                                            margin="dense"
                                            id="price"
                                            label="Price"
                                            name="price"
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.price}
                                            helperText={formik.errors.price}
                                            error={formik.errors.price ? true : false}
                                        />


                                        <select onChange={formik.handleChange} name="categoryname" className='form-select' >
                                            {
                                                // form-select-sm mb-3

                                                categorydata.category.map((values) => {
                                                    const { id, categoryname } = values
                                                     console.log(categoryname);
                                                    return (
                                                        <option value={categoryname}>{categoryname}</option>
                                                    )
                                                })
                                            }


                                            {/* <option>Select Your Category</option>
                                            <option>{values.name}</option> */}

                                        </select>

                                        <input
                                            type="file"
                                            name='file'
                                            id="file"
                                            onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
                                            helperText={formik.errors.file}

                                        />
                                        {
                                            formik.errors.file ? <p>{formik.errors.file}</p> : ''
                                        }
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            {
                                                Update ?
                                                    <Button type="submit">Update</Button>
                                                    :
                                                    <Button type="submit">Submit</Button>
                                            }
                                        </DialogActions>
                                    </DialogContent>
                                </Form>
                            </Formik>
                        </Dialog>
                        <div>
                            <Dialog
                                open={dopen}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Are You Sure Delete Category "}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">

                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => handleDelete()} autofocus>yes</Button>
                                    <Button onClick={handleClose}>No</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </Container>
            </Box>

        </>
    );
}

export default ProductAdmin;