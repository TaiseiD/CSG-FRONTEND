import { useMemo, useState } from "react";
import eventData from "../../config/eventsConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../../components/typography/Typography";
import AnnouncementCard from "../../components/announcement-card/Announcement-card";
import './announcement.css'

export default function Announcement() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const EVENT_PER_SLIDE = 1;

  const eventSlide = useMemo(() => {
    const slides = [];
    for (let i = 0; i < eventData.length; i += EVENT_PER_SLIDE) {
      slides.push(eventData.slice(i, i + EVENT_PER_SLIDE));
    }
    return slides;
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, eventSlide.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="announcement-container">
      <div className="announcement-layout">

        <div className="announcement-texts">
          <Typography size="text-md" color="text-dark">
            Announcements
          </Typography>
          <Typography size="text-sm" color="text-ghost">
            Stay updated with the latest news and events
          </Typography>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {eventSlide.map((slide, slideIndex) => (
              <div key={slideIndex} className="carousel-slide">
                <div className="announcement-card-container">
                  {slide.map((event, index) => (
                    <div key={event.id} className={`announcement-card-item-${index}`}>
                      <AnnouncementCard
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        image={event.image}
                        variant="default"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button
              className="announcement-button"
              type="button"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              className="announcement-button"
              type="button"
              onClick={nextSlide}
              disabled={currentSlide === eventSlide.length - 1}
              aria-label="Next slide"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="dot-indicators">
            {eventSlide.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot ${index === currentSlide ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
