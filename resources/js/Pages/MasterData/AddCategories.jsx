import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import Categories from "./Categories";

const AddCategories = () => {

    const { data , setData , post , processing }= useForm([
        kategori => '',
    ])

    const HttpGet = () => {

        post(route('categories.store'))

    }


    return (
        <AuthenticatedLayout>
            <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
            Add Categories
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter new categories
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Categories
                </Typography>
                <Input
                onChange={e => setData('kategori' , e.target.value)}
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
        </Card>
        </AuthenticatedLayout>
    );
  }

  export default AddCategories
