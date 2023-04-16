import { LayoutContainer, ContentContainer } from '../components/Container';
import { HomeGrid } from '../components/HomeGrid';
import {
  IntroPart,
  AboutPart,
  LocationPart,
  ProfileImgPart,
  ProfileNamePart,
  ProjectPart,
  ResumePart,
} from '../components/HomeGrid/GridItem';
export default function Home() {
  return (
    <main>
      <LayoutContainer>
        <ContentContainer>
          <HomeGrid>
            <IntroPart />
            <ProfileImgPart />
            <ProfileNamePart />
            <ResumePart />
            <LocationPart />
            <ProjectPart />
            <AboutPart />
          </HomeGrid>
        </ContentContainer>
      </LayoutContainer>
    </main>
  );
}
