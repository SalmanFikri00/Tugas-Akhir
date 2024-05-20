import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, router } from "@inertiajs/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const AuthenticatedLayout = ( {children }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex bg-gray-200">
        <div className=" w-64 h-screen flex items-center">
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
              <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
          >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
                <Link href={route('dashboard')}>
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Analytics
                    </ListItem>
                </Link>
                <Link href={route('reporting.index')}>
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Reporting
                    </ListItem>
                </Link>
                <Link href={route('items.index')}>
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Items
                    </ListItem>
                </Link>
                <Link href={route('categories.index')}>
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Categories
                    </ListItem>
                </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
              <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Transaction
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
                <Link href={route('order.index')}>
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Orders
                    </ListItem>
                </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <Link href={route('profile.edit')}>
        <ListItem>
            <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
            </ListItem>
        </Link>
        <span onClick={ () => {router.post('/logout')}}>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        </span>
      </List>
    </Card>
            </div>
            <div className=" p-24 w-[calc(100vw-16rem)]">
                {children}
            </div>
        </div>
  );
}


export default AuthenticatedLayout
