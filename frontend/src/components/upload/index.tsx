/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ImagePreview, MessagePreview, Body, Button } from './styles';
import * as uploadActions from '../../redux/upload/uploadActions';
import { bindActionCreators } from 'redux';
import { State } from '../../redux/reducers';

export const Upload: React.FC = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const inputBody = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const { uploadPhoto, resetValues } = bindActionCreators(uploadActions, dispatch);
  const { data, error, loading } = useSelector((state: State) => state.upload);

  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleUpload = useCallback(
    (e) => {
      e.preventDefault();
      const dataImage = {
        // @ts-ignore: Object is possibly 'null'.
        file: inputFile.current.files[0],
        body,
      };
      uploadPhoto(dataImage);

      setDisabled(true);
    },
    [body],
  );

  const handleInputFile = useCallback(
    (file) => {
      resetValues();
      if (file.target.files[0]) {
        setImage(URL.createObjectURL(file.target.files[0]));
        setDisabled(false);
      } else {
        setImage('');
      }
      // @ts-ignore: Object is possibly 'null'.
      inputBody.current.focus();
    },
    [resetValues],
  );

  const handleBody = useCallback(
    (e) => {
      setBody(e.target.value);
      if (body.trim().length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [body],
  );

  return (
    <Container onSubmit={handleUpload} enctype="multipart/form-data">
      {image ? (
        // @ts-ignore: Object is possibly 'null'.
        <ImagePreview src={image} title="image preview" onClick={() => inputFile.current.click()} />
      ) : (
        // @ts-ignore: Object is possibly 'null'.
        <MessagePreview onClick={() => inputFile.current.click()}>Select your photo</MessagePreview>
      )}

      <input
        ref={inputFile}
        name="file"
        type="file"
        onChange={handleInputFile}
        accept="image/*"
        style={{ display: 'none' }}
      />

      <Body placeholder="Enter some description" value={body} onChange={handleBody} ref={inputBody} />
      <Button type="submit" disabled={disabled} error={error}>
        {loading ? <p>Loading...</p> : error ? 'Image too big' : 'Publish'}
      </Button>
    </Container>
  );
};
