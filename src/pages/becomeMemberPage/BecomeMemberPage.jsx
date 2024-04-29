import BottomBar from "../../components/BottomBar/BottomBar";
import Header from "../../components/headerSection/Header";
import NavBar from "../../components/menu/NavBar";
import MainImage from "/images/BecomeMember-bg.png";

export default function BecomeMemberPage() {
  return (
    <>
      <NavBar />
      <Header
        bgImage={MainImage}
        heading={"Become a member"}
        styles={"pt-52 pb-64 flex justify-center"}
      />
      <BottomBar />
    </>
  );
}
