/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi';
import { StyledModal, MoreOptions } from './styles';
import { IPhoto } from '../../redux/upload/uploadTypes';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedActions from '../../redux/feed/feedActions';
interface MoreOptionsProps {
  isAuthor: boolean;
  photo: IPhoto;
}

export const MoreOptionsModal: React.FC<MoreOptionsProps> = ({ isAuthor, photo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();
  const { deleteFollow, deletePhoto } = bindActionCreators(FeedActions, dispatch);

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
  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleDelete = useCallback(
    (_photo) => {
      deletePhoto(_photo);
      toggleModal();
    },
    [toggleModal],
  );

  const handleFollow = useCallback(
    (idUser) => {
      deleteFollow(idUser);
      toggleModal();
    },
    [deleteFollow, toggleModal],
  );
  return (
    <>
      <FiMoreHorizontal size={20} onClick={toggleModal} />
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
        {isAuthor ? (
          <MoreOptions>
            <li>
              <Link to={`/photo/${photo.id}`}>Go to Publication</Link>
            </li>
            <li className="red" onClick={() => handleDelete(photo)}>
              Delete Publication
            </li>
            <li onClick={toggleModal}>Cancel</li>
          </MoreOptions>
        ) : (
          <MoreOptions>
            <li>
              <Link to={`/photo/${photo.id}`}>Go to Publication</Link>
            </li>
            <li className="red" onClick={() => handleFollow(photo.userId)}>
              Stop Following
            </li>
            <li onClick={toggleModal}>Cancel</li>
          </MoreOptions>
        )}
      </StyledModal>
    </>
  );
};
