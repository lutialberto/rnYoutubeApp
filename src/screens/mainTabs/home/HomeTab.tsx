import React, {useEffect, useState} from 'react';
import Header from '~/components/containers/header/Header';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';
import Tags from './components/tags/Tags';
import ContentPreview from '~/components/containers/contentPreview/ContentPreview';
import {IContentPreviewSection} from '~/services/models/ContentPreviewListResponse';
import {getPreviewContentList} from '~/services/previewContentListServices';

const HomeTab = () => {
  const [previewContentSections, setPreviewContentSections] = useState<IContentPreviewSection[]>(
    [],
  );

  useEffect(() => {
    getPreviewContentList('').then(response => {
      setPreviewContentSections(response.sections);
    });
  }, []);

  return (
    <ScreenContainer>
      <Header />
      <Tags />
      <ContentPreview sections={previewContentSections} />
    </ScreenContainer>
  );
};

export default HomeTab;
