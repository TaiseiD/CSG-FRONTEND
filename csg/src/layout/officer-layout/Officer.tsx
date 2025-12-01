import OfficerCard from "../../components/officer-card/Officer-card";
import Typography from "../../components/typography/Typography";
import './officer.css'

export default function Officer() {
    const officer = [
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
        {
            id: 'name',
            title: 'position in csg',
            description: 'short des about them',
            image: '/path/to/image1.png'
        },
    ];

    const handleView = (id: string) => {
        console.log('Viewing document:', id);
    };

    return(
        <section className="officer-container">
            <div className="officer-layout">
                <div className="document-texts">
                    <Typography size="text-md" color="text-dark">
                        Executive Officers
                    </Typography>
                    <Typography size="text-sm" color="text-ghost">
                        This are the executive officers
                    </Typography>
                </div>
                <div className="officer-grid">
                    {officer.map((officer) => (
                        <OfficerCard
                            id={officer.id}
                            title={officer.title}
                            description={officer.description}
                            image={officer.image}
                            variant="default"
                            onClick={() => handleView(officer.id)}
                        />
                    ))}
                </div>
                 <div className="page">
                    <button 
                        className="page-arrow"
                        //onClick={}
                        //disabled={}
                    >
                        ←
                    </button>
                    
                    <div className="page-info">
                        Page {} of {}
                    </div>
                    
                    <button 
                        className="page-arrow"
                        //onClick={}
                        //disabled={}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}