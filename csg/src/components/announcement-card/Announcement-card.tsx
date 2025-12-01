import './announcement-card.css';

type AnnouncementCardProps = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnnouncementCard({
  id,
  title,
  description,
  image,
  date,
  variant = 'default',
  onClick,
  style,
}: AnnouncementCardProps) {
  return (
    <div id={id} className={`announce-card ${variant}`} style={style} onClick={onClick}>
      {image && (
        <div className='announcement-card-image'>
          <img src={image} alt={title} />
        </div>
      )}
      <div className='announcement-card-content'>
        {title && <h3 className='announcement-card-title'>{title}</h3>}
        {date && <p className='announcement-card-date'>{date}</p>}
        {description && <p className='announcement-card-description'>{description}</p>}
      </div>
    </div>
  );
}
