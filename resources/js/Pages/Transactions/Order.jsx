import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsBody,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { formatRupiah } from "@/Helpers";

const Order = ({ item }) => {
  const { data, setData, post, processing, reset } = useForm({
    barang: '',
    jumlah: 1,
    total: '',
    pembeli: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('order.store'), {
      onSuccess: () => {
        reset();
        setTotalHarga("");
        setBarang({
          harga_jual: 0,
        });
      },
    });
  };

  const [type, setType] = React.useState("card");
  const [totalHarga, setTotalHarga] = React.useState("");
  const [barang, setBarang] = React.useState({
    harga_jual: 0,
  });

  useEffect(() => {
    reset({
      barang: '',
      total: '',
      jumlah: 1,
      pembeli: ''
    });
    setBarang({
      harga_jual: 0,
    });
    setTotalHarga("");
  }, []);

  return (
    <AuthenticatedLayout>
      <div>
        <Card className="w-full max-w-[24rem]">
          <CardHeader
            color="gray"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 py-8 text-center"
          >
            <div className="mb-4 h-20 p-6 text-white">
              {type === "card" ? (
                <CreditCardIcon className="h-10 w-10 text-white" />
              ) : (
                <img
                  alt="paypal"
                  className="w-14"
                  src="https://docs.material-tailwind.com/icons/paypall.png"
                />
              )}
            </div>
            <Typography variant="h5" color="white">
              Penjualan Barang
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsBody className="!overflow-x-hidden !overflow-y-visible">
                <TabPanel value="card" className="p-0">
                  <form className="mt-12 flex flex-col gap-4" onSubmit={submit}>
                    <div className="w-72 flex gap-12 my-5 ">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className=""
                      >
                        Barang
                      </Typography>
                      <Select
                        label="Select Categories"
                        value={barang.nama_barang}
                      >
                        {item.map((item) => (
                          <Option
                            key={item.id}
                            onClick={() => {
                              setBarang(item);
                              setTotalHarga(item.harga_jual * data.jumlah);
                              setData({
                                barang: item.id,
                                total: item.harga_jual * data.jumlah,
                                jumlah: data.jumlah,
                                pembeli: data.pembeli,
                              });
                            }}
                          >
                            {item.nama_barang}
                          </Option>
                        ))}
                      </Select>
                    </div>

                    <div className="my-3">
                      <div className="my-4 flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Jumlah
                          </Typography>
                          <Input
                            onChange={(e) => {
                              setTotalHarga(
                                barang.harga_jual * e.target.value
                              );
                              setData({
                                barang: data.barang,
                                total: barang.harga_jual * e.target.value,
                                jumlah: e.target.value,
                                pembeli: data.pembeli,
                              });
                            }}
                            containerProps={{ className: "min-w-[72px]" }}
                            type="number"
                            min={1}
                            value={data.jumlah}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Total Harga
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-2xl"
                          >
                            {formatRupiah(totalHarga)}
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Pembeli
                      </Typography>
                      <Input
                        value={data.pembeli}
                        onChange={(e) => {
                          setData('pembeli', e.target.value);
                        }}
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className:
                            "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Button size="lg" type="submit" loading={processing}>
                      Pay Now
                    </Button>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
};

export default Order;
