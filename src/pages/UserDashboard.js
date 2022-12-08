import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Unstable_Grid2";
import PasswordIcon from "@mui/icons-material/Password";
import Dashboard from "../components/Dashboard";
import { ChangePassword } from "./userDashboard/ChangePassword";

const list = [
  {
    title: "Profile",
    icon: <PeopleIcon />,
    childIndex:0
  },
  {
    title: "Order",
    icon: <ShoppingCartIcon />,
    childIndex:1
  },
  {
    title: "Password",
    icon: <PasswordIcon />,
    childIndex:2
  },
];

const  Portlet = ({name}) => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
          <div>{name}</div>
      </Grid>
    </Grid>
  );
};

const Profile = () =>{
    return <Portlet name='Profile' />
}
const Password = () =>{
    return <Portlet name='Password' />
}
const Order = () =>{
    return <Portlet name='Order' />
}

const passwordHandler = ({password,confirmPassword}) => {

}

const porlets =[
    <Portlet name={list[1].title}/>,
    <Portlet name={list[2].title}/>,
    <ChangePassword handler={passwordHandler}/>
]
export default function UserDashboard() {
  return <Dashboard list={list} children={porlets}/>;
}
