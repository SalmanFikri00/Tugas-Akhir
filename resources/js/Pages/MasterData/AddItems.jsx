
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
  } from "@material-tailwind/react";
import Categories from "./Categories";

const AddCategories = ( { kategori }) => {

    const { data , setData , post , processing }= useForm({
        nama_barang : '',
        kategori : '',
        harga_jual : '',
        harga_beli : '',
        merk : '',
        stok : '',
})

    const HttpGet = () => {

        post(route('items.store'))

    }


    return (
        <AuthenticatedLayout>
                <Card color="transparent" shadow={false} className="flex">
                    <div className="flex gap-24">
                    <div>
                        <Typography variant="h4" color="blue-gray">
                        Add Items
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter new item
                        </Typography>
                    </div>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Name
                    </Typography>
                    <Input
                    value={ data.nama_barang }
                    onChange={e => setData('nama_barang' , e.target.value)}
                    size="lg"
                    placeholder="laptop"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        />
                </div>
                <div className="w-72 flex gap-12 my-5 ">
                    <Typography variant="h6" color="blue-gray" className="">
                        Categories
                    </Typography>
                    <Select label="Select Categories" >

                        {
                            kategori.map( ( item ) => (
                                <Option key={ item.id} onClick={ () => { setData('kategori', item.id) } } >{ item.kategori }</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Harga Jual
                    </Typography>
                    <Input
                    onChange={e => setData('harga_jual' , e.target.value)}
                    size="lg"
                    placeholder="laptop"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Harga Beli
                    </Typography>
                    <Input
                    onChange={e => setData('harga_beli' , e.target.value)}
                    size="lg"
                    placeholder="laptop"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        />
                </div>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Brand
                    </Typography>
                    <Input
                    onChange={e => setData('merk' , e.target.value)}
                    size="lg"
                    placeholder="laptop"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                        />
                </div>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                    stock
                    </Typography>
                    <Input
                    onChange={e => setData('stok' , e.target.value)}
                    size="lg"
                    placeholder="laptop"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                <Button className="mt-6" fullWidth onClick={HttpGet} loading={processing} >
                    Add
                </Button>
                </form>
                    </div>
            </Card>
        </AuthenticatedLayout>
    );
  }

  export default AddCategories
