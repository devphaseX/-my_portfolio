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
            <ProfileNamePart />
            <ProjectPart />
            <AboutPart />
            <ProfileImgPart />
            <ResumePart />
            <LocationPart />
            {/*
             */}
          </HomeGrid>
        </ContentContainer>
      </LayoutContainer>
    </main>
  );
}
