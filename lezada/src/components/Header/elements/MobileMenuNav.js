import { useEffect } from "react";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group One</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/home/decor"
                    as={process.env.PUBLIC_URL + "/home/decor"}
                  >
                    <a>Decor</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/creative"
                    as={process.env.PUBLIC_URL + "/home/creative"}
                  >
                    <a>Creative</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/perfumes"
                    as={process.env.PUBLIC_URL + "/home/perfumes"}
                  >
                    <a>Perfumes</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/trending"
                    as={process.env.PUBLIC_URL + "/home/trending"}
                  >
                    <a>Trending</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href={process.env.PUBLIC_URL + "/"}>
                <a>Home Group Two</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/home/essentials"
                    as={process.env.PUBLIC_URL + "/home/essentials"}
                  >
                    <a>Essentials</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/accessories"
                    as={process.env.PUBLIC_URL + "/home/accessories"}
                  >
                    <a>Accessories</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/lookbook"
                    as={process.env.PUBLIC_URL + "/home/lookbook"}
                  >
                    <a>Lookbook</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/furniture"
                    as={process.env.PUBLIC_URL + "/home/furniture"}
                  >
                    <a>Furniture</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group Three</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link
                    href="/home/smart-design"
                    as={process.env.PUBLIC_URL + "/home/smart-design"}
                  >
                    <a>Smart Design</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/collection"
                    as={process.env.PUBLIC_URL + "/home/collection"}
                  >
                    <a>Collection</a>
                  </Link>
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
            <li className="menu-item-has-children">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group Four</a>
              </Link>
              <ul className="mobile-sub-menu">
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
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-children">
                <Accordion>
                  <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Shoe Mart
                  </Accordion.Toggle>
                  <IoIosArrowDown />
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Casual
                          </Accordion.Toggle>
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Formal
                          </Accordion.Toggle>
                
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Loafers
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Moccasin
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Mule
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
              </li>
              <li className="has-children">
                <Accordion>
                  <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Attractions
                  </Accordion.Toggle>
                  <IoIosArrowDown />
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            New Arrivals
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Sale
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Best Selling Products
                          </Accordion.Toggle>
                          
                        </Accordion>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
              </li>
              <li className="has-children">
                <Accordion>
                  <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Information
                  </Accordion.Toggle>
                  <IoIosArrowDown />
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                        <Link
                                  href="/other/about"
                                  as={process.env.PUBLIC_URL + "/other/about"}
                                >
                                  <a>About Us</a>
                                </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                        <Link
                                  href="/other/contact"
                                  as={process.env.PUBLIC_URL + "/other/contact"}
                                >
                                  <a>Contact Us</a>
                                </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                        <Link
                                  href="/other/faq"
                                  as={process.env.PUBLIC_URL + "/other/faq"}
                                >
                                  <a>F.A.Q.</a>
                                </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Policies
                          </Accordion.Toggle>
                          <IoIosArrowDown />
                          <Accordion.Collapse eventKey="0">
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/home/swimsuit"
                                  as={process.env.PUBLIC_URL + "/home/swimsuit"}
                                >
                                  <a>T&C</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/special"
                                  as={process.env.PUBLIC_URL + "/home/special"}
                                >
                                  <a>Privacy Policy</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/concept"
                                  as={process.env.PUBLIC_URL + "/home/concept"}
                                >
                                  <a>Payment Policy</a>
                                </Link>
                              </li>
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
