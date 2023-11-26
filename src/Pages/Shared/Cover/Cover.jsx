import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor soluta eius aut laudantium quam quis perferendis omnis mollitia earum excepturi modi, ab quia est! Consequatur ducimus voluptas atque corrupti nulla.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            
        </Parallax>

    );
};

export default Cover;