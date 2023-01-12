// *Design Imports*
import ecommerceIllustration from "../../assets/images/e-commerce-illustration.png";
import businessIllustration from "../../assets/images/business-illustration.png";
import designIllustration from "../../assets/images/design-illustration.png";
import "./services.css";

const Services = () => {
  return (
    <div className="servicesGridContainer">
      <div className="service">
        <div className="imgContain">
          <img src={ecommerceIllustration} alt="e-commerce-illustration.png" />
        </div>
        <div className="serviceTxtContainer">
          <h2>E-commerce Websites</h2>
          <p>
            Does your store need to move to the web? Let's get your store in the
            making so you can start selling worldwide by building your all new
            e-commerce store with all your custom needs.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="serviceTxtContainer">
          <h2>Business Websites</h2>
          <p>
            Need a business website? Let's get your business on the web, with a
            modern and good looking website. Helping you stand out from the
            rest!
          </p>
        </div>
        <div className="imgContain">
          <img src={businessIllustration} alt="business-illustration.png" />
        </div>
      </div>
      <div className="service">
        <div className="imgContain">
          <img src={designIllustration} alt="design-illustration.png" />
        </div>
        <div className="serviceTxtContainer">
          <h2>Website Designs</h2>
          <p>
            I can design and prototype websites and apps to suite your needs for
            future development!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
