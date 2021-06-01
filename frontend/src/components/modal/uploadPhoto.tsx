/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect, useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { Upload } from '../upload';
import { StyledModal } from './styles';
import * as uploadActions from '../../redux/upload/uploadActions';
import { bindActionCreators } from 'redux';

export const ModalUploadPhoto: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.upload);
  const { resetValues } = bindActionCreators(uploadActions, dispatch);

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const afterOpen = useCallback(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  const beforeClose = useCallback(
    () =>
      new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
      }),
    [],
  );

  useEffect(() => {
    if (data) {
      toggleModal();
      resetValues();
    }
  }, [data, resetValues, toggleModal]);

  return (
    <>
      <FaFileUpload size={30} onClick={toggleModal} />

      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        //@ts-ignore
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Upload />
      </StyledModal>
    </>
  );
};
