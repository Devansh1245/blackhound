import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/home/lookbook" as={process.env.PUBLIC_URL + "/home/lookbook"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/home/decor" as={process.env.PUBLIC_URL + "/home/decor"}>
            <a>Shoe Mart</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Link href="/home/decor" as={process.env.PUBLIC_URL + "/home/decor"}>
                <a>CASUAL</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/decor"
                    as={process.env.PUBLIC_URL + "/home/decor"}
                  >
                    <a>Decor</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/decor.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/creative"
                    as={process.env.PUBLIC_URL + "/home/creative"}
                  >
                    <a>Creative</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/creative.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/perfumes"
                    as={process.env.PUBLIC_URL + "/home/perfumes"}
                  >
                    <a>Perfumes</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/perfumes.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/trending"
                    as={process.env.PUBLIC_URL + "/home/trending"}
                  >
                    <a>Trending</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/trending.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/home/essentials" as={process.env.PUBLIC_URL + "/home/essentials"}>
                <a>FORMAL</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/essentials"
                    as={process.env.PUBLIC_URL + "/home/essentials"}
                  >
                    <a>Essentials</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/essentials.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/accessories"
                    as={process.env.PUBLIC_URL + "/home/accessories"}
                  >
                    <a>Accessories</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/accessories.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/lookbook"
                    as={process.env.PUBLIC_URL + "/home/lookbook"}
                  >
                    <a>Lookbook</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/lookbook.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/furniture"
                    as={process.env.PUBLIC_URL + "/home/furniture"}
                  >
                    <a>Furniture</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/furniture.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/home/smart-design" as={process.env.PUBLIC_URL + "/home/smart-design"}>
                <a>LOAFERS</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/smart-design"
                    as={process.env.PUBLIC_URL + "/home/smart-design"}
                  >
                    <a>Smart Design</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/smart-design.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/collection"
                    as={process.env.PUBLIC_URL + "/home/collection"}
                  >
                    <a>Collection</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/collection.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/jewelry"
                    as={process.env.PUBLIC_URL + "/home/jewelry"}
                  >
                    <a>Jewelry</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/cosmetics"
                    as={process.env.PUBLIC_URL + "/home/cosmetics"}
                  >
                    <a>Cosmetics</a>
                  </Link>
                </li>
              </ul>
            </li>
           <li className="sub-menu--mega__title">
              <Link href="/home/collection" as={process.env.PUBLIC_URL + "/home/collection"}>
                <a>MOCCASIN</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/swimsuit"
                    as={process.env.PUBLIC_URL + "/home/swimsuit"}
                  >
                    <a>Swimsuit</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/special"
                    as={process.env.PUBLIC_URL + "/home/special"}
                  >
                    <a>Special</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/concept"
                    as={process.env.PUBLIC_URL + "/home/concept"}
                  >
                    <a>Concept</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/concept"
                    as={process.env.PUBLIC_URL + "/home/concept"}
                  >
                    <a>Concept</a>
                  </Link>
                </li>
                
              </ul>  
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/home/concept" as={process.env.PUBLIC_URL + "/home/concept"}>
                <a>MULE</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/smart-design"
                    as={process.env.PUBLIC_URL + "/home/smart-design"}
                  >
                    <a>Smart Design</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/smart-design.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/collection"
                    as={process.env.PUBLIC_URL + "/home/collection"}
                  >
                    <a>Collection</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/collection.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/jewelry"
                    as={process.env.PUBLIC_URL + "/home/jewelry"}
                  >
                    <a>Jewelry</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/cosmetics"
                    as={process.env.PUBLIC_URL + "/home/cosmetics"}
                  >
                    <a>Cosmetics</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Attractions</a>
        </Link>
        <IoIosArrowDown />
        <ul className="sub-menu sub-menu--mega--column-1">
          
            <li className=" sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>New Arrivals</a>
              </Link>
            </li>
        
         
            <li className=" sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Sale</a>
              </Link>
            </li>
        
          <li className=" sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Best Selling Products</a>
              </Link>
            </li>
       
        </ul>
        </li>
        <li>
        <Link href="/other/about" as={process.env.PUBLIC_URL + "/other/about"}>
            <a>Information</a>
        </Link>
        <IoIosArrowDown />
        <ul className="sub-menu sub-menu--mega--column-1">
          
            <li className=" sub-menu--mega__title">
              <Link href="/other/about" as={process.env.PUBLIC_URL + "/other/about"}>
                <a>About Us</a>
              </Link>
            </li>
        
         
            <li className=" sub-menu--mega__title">
              <Link href="/other/contact" as={process.env.PUBLIC_URL + "/other/contact"}>
                <a>Contact Us</a>
              </Link>
            </li>
        
          <li className=" sub-menu--mega__title">
              <Link href="/other/faq" as={process.env.PUBLIC_URL + "/other/faq"}>
                <a>F.A.Q.</a>
              </Link>
            </li>
            <li className=" sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Policies</a>
              </Link>
              <IoIosArrowDown />
              <ul className="sub-menu--mega__list">
                <li>
                <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>T & C</a>
              </Link>
                </li>
                <li>
                <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Privacy Policy</a>
              </Link>
                </li>
                <li>
                <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Payment Policy</a>
              </Link>
                </li>
              </ul>
            </li>
       
        </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;