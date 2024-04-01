import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import photo from './mainpage.png';
import photo1 from './Education-Top-10-UK-Blogs.jpg';

// Updated sections array to include an 'id' for each section
const sections = [
  { title: 'Academic Resources', id: 'academic-resources' },
  { title: 'Career Services', id: 'career-services' },
  { title: 'Campus', id: 'campus' },
  { title: 'Culture', id: 'culture' },
  { title: 'Local Community Resources', id: 'local-community-resources' },
  { title: 'Social', id: 'social' },
  { title: 'Sports', id: 'sports' },
  { title: 'Health and Wellness', id: 'health-and-wellness' },
  { title: 'Technology', id: 'technology' },
  { title: 'Travel', id: 'travel' },
  { title: 'Alumni', id: 'alumni' },
];

const defaultTheme = createTheme();

export default function Blog() {
  const navigate = useNavigate();
  const users=localStorage.getItem('users')
  console.log(users)

  // Updated to navigate to dynamic route based on the section id
  const handleSectionClick = (id) => {
    navigate(`/view-post-grid/${id}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
  <CssBaseline />
  <Container maxWidth="lg">
    <Header
      title="Blog"
      sections={sections.map((section) => ({
        ...section,
        onClick: () => handleSectionClick(section.id),
      }))}
      login={localStorage.getItem('login') === 'true'}
      user={localStorage.getItem('user')}
    />
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
        <Typography variant="h5" style={{ marginBottom: '16px' }}>
          Education blogging platform!
        </Typography>
        <img src={photo1} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
        <Typography variant="body1" style={{ marginLeft: '24px', marginRight: '24px', marginBottom: '24px' }}>
          Embark on a journey through the boundless realms of knowledge, where diverse voices, experiences, and insights converge. From scholarly discourse to personal narratives, from campus updates to career advice, our platform is a treasure trove of wisdom and discovery. Whether you're seeking academic guidance, career inspiration, or simply a glimpse into campus life, you'll find a wealth of content to explore and engage with. Join us as we navigate the intricate pathways of academia, fostering connections, and celebrating the richness of the English language.
        </Typography>
        <Typography variant="body1" style={{ marginLeft: '24px', marginRight: '24px', marginBottom: '24px' }}>
        Join us as we converse, share stories, and connect with fellow members of our dynamic community. Together, let's build a platform that promotes collaboration, learning, and development
        </Typography>
      </div>
      {/* Rest of your content */}
    </main>
  </Container>
  <Footer
    title="Illinois Institue of Technology"
    //description="Illinois Institue of Technology"
  />
</ThemeProvider>
  );
}