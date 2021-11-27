import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`navigation-overlay ${activeStatus ? "active" : ""}`}>
      <div className="navigation-overlay__content">
        <button
          className="navigation-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="navigation-overlay__content-container">
          <nav>
            <ul>
              <li className="has-children">
                <Accordion>
                <Link href="/home/lookbook" as={process.env.PUBLIC_URL + "/home/lookbook"}>
                  <a>Home</a>
                </Link>
                </Accordion>
              </li>
              <li className="has-children">
                <Accordion>
                <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Shoe Mart
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/home/decor" as={process.env.PUBLIC_URL + "/home/decor"}>
                            <a>CASUAL</a>
                          </Link>
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/home/essentials" as={process.env.PUBLIC_URL + "/home/essentials"}>
                            <a>FORMAL</a>
                          </Link>
                
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                        <Link href="/home/smart-design" as={process.env.PUBLIC_URL + "/home/smart-design"}>
                          <a>LOAFERS</a>
                        </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/home/collection" as={process.env.PUBLIC_URL + "/home/collection"}>
                            <a>MOCCASIN</a>
                          </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/home/concept" as={process.env.PUBLIC_URL + "/home/concept"}>
                            <a>MULE</a>
                          </Link>
                          
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
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                          <a>New Arrivals</a>
                        </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                            <a>Sale</a>
                          </Link>
                          
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                            <a>Best Selling Products</a>
                          </Link>
                          
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
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
