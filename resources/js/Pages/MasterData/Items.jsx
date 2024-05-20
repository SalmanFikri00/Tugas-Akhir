import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { formatRupiah } from "@/Helpers";

const TABLE_HEAD = ["No",  "Name" , "brand" , 'harga jual' , 'harga beli', "Categories", "stok" , '' ];

const Items = ( { datas }) => {



    console.log(datas)

  return (
    <AuthenticatedLayout>
        <div className=" w-full ">

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
            {datas.data.map(({id, merk , nama_barang, stok , harga_jual , harga_beli, kategori , created_at }, index) => {
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
                        {nama_barang}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {merk}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {formatRupiah(harga_jual)}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        >
                        {formatRupiah(harga_beli)}
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
                        {stok}
                    </Typography>
                    </td>
                    <td className={classes+' flex gap-6'}>
                        <Link href={ `/items/${id}`} >
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                                >
                                Edit
                            </Typography>
                        </Link>
                        <Typography
                            onClick={ () => { router.delete(`/items/${id}`)}}
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                            >
                            Hapus
                        </Typography>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </Card>
        <Link href={route('items.add')}>
            <Button>Add Item</Button>
        </Link>
        </div>
    </AuthenticatedLayout>
  );
}

export default Items
