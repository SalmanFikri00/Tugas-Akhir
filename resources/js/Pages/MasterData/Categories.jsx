import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Card, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Categories", "Date", "" ];

const Categories = ( { datas }) => {

    console.log(datas)

  return (
    <AuthenticatedLayout>
        <div className=" w-full">

        <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left ">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    >
                    {head}
                    </Typography>
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {datas.map(({id, kategori , created_at }, index) => {
                const isLast = index === datas.length - 1;
                const classes = isLast ? "px-8 py-4" : "px-8 py-4 border-b border-blue-gray-50";

                return (
                <tr key={id}>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {index+1}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {kategori}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {created_at}
                    </Typography>
                    </td>
                    <td className={classes+ ' flex gap-5'}>
                        <Link href={'/categories/edit/' + id} >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                                >
                                        Edit
                            </Typography>
                        </Link>
                        <Link href={'/categories/'+ id} method="delete" >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                                >
                                        Delete
                            </Typography>
                        </Link>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </Card>
        <Link href={route('categories.add')}>
            <Button>Add Categories</Button>
        </Link>
        </div>
    </AuthenticatedLayout>
  );
}

export default Categories
