import DocumentCard from "../../components/document-card/Document-card";
import Typography from "../../components/typography/Typography";
import './document.css'


export default function Document(){
    const documents = [
    {
      id: "1",
      category: "Offerings",
      title: 'Detailed minutes regarding every departed discussion',
      description: 'Comprehensive documentation displaying proposals',
      date: 'View →',
      image: '/path/to/image1.png'
    },
    {
      id: "2",
      category: "Boundaries",
      title: 'Official doctrines that impact student careerously',
      description: 'Capture policy changes and initiatives',
      date: 'Read →',
      image: '/path/to/image2.png'
    },
    {
      id: "3",
      category: "Projects",
      title: 'Individual projects and activity plans',
      description: 'See student-directed co-curriculars and initiatives',
      date: 'Discover →',
      image: '/path/to/image3.png'
    },
    {
      id: "4",
      category: "Financials",
      title: 'Clear and accessible financial movements',
      description: 'Track line-items, budgets and categorical allotment',
      date: 'Review →',
      image: '/path/to/image4.png'
    }
  ];

  const handleView = (id: string) => {
    console.log('Viewing document:', id);
    
  };

  return (
    <section className="document-container">
        <div className="document-layout">
            <div className="document-texts">
                <Typography size="text-md" color="text-dark">
                    Comprehensive Document Library
                </Typography>
                <Typography size="text-sm" color="text-ghost">
                    This is where the documents
                </Typography>
            </div>
      
            <div className="document-grid">
                {documents.map((docu) => (
                <DocumentCard
                    id={docu.id}
                    title={docu.title}
                    description={docu.description}
                    date={docu.date}
                    image={docu.image}
                    variant="default"
                    onClick={() => handleView(docu.id)}
                />
                ))}
            </div>
        </div>
    </section>
  );
}