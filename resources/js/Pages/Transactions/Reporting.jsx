import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, Typography } from "@material-tailwind/react";
import { formatRupiah } from "@/Helpers";

const TABLE_HEAD = [ "No" , "Pembeli", "Nama Barang", "Jumlah Barang" , "total harga", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function Reporting( { penjualan }) {

    console.log(penjualan)
  return (
    <AuthenticatedLayout>
        <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
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
            {penjualan.data.map(({ barang , pembeli, total , jumlah }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                <tr key={index}>
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
                        {pembeli}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {barang.nama_barang}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {jumlah}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {formatRupiah(total)}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                        Edit
                    </Typography>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </Card>
    </AuthenticatedLayout>
  );
}

export default Reporting
