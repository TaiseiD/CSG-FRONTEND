import Typography from "../../components/typography/Typography";
import { Image } from "lucide-react";
import './about.css'

export default function About() {
    return(
        <section className="about-container">
            <div className="about-layout">
                <div className="about-text-layout">
                    <div className="about-texts">
                        <Typography size="text-md" color="text-dark">
                            About
                        </Typography>
                        <Typography size="text-sm" color="text-ghost">
                            This is about page
                        </Typography>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-content-sect1">
                        <Typography size="text-md" color="text-dark">
                            CENTRAL STUDENT
                        </Typography>
                        <Typography size="text-md" color="text-dark">
                            GOVERNMENT
                        </Typography>
                        <Typography size="text-xsm" color="text-ghost">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam pariatur at similique porro tenetur? Nemo illo, quaerat omnis sequi eaque nostrum soluta tenetur hic odio sit incidunt, asperiores veritatis debitis!
                        </Typography>
                    </div>
                    <div className="about-content-image">
                        <Image />
                    </div>
                    <div className="about-content-image">
                        <Image />
                    </div>
                    <div className="about-content-sect2">
                        <div className="about-content-text">
                            <Typography size="text-xsm" color="text-ghost">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam pariatur at similique porro tenetur? Nemo illo, quaerat omnis sequi eaque nostrum soluta tenetur hic odio sit incidunt, asperiores veritatis debitis!
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}