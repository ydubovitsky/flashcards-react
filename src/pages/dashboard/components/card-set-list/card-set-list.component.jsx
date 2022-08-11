import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../common/atomic-components/button/button.component';
import {
  cardEntitySelector,
  deleteCardSet,
  getAllCardSets,
  setFavoriteCardSet
} from '../../../../redux/features/card/cardSlice';
import styles from './card-set-list.module.css';

const CardSetList = () => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCardSets());
  }, []);

  const showCardSetTable = () => (
    <>
      {cardEntity.map((cardSet, idx) => {
        const {
          id,
          description,
          createdAt,
          updatedAt,
          flashCardArray,
          folder,
          isFavorite } = cardSet;
        return (
          <tr key={idx} className={styles.tr}>
            <td
              className={styles.cardSetTitle}
              onClick={() => navigate(`${cardSet.id}/list`)}
            >
              {cardSet.name}
            </td>
            <td>{description}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td>{flashCardArray.length}</td>
            <td>{folder}</td>
            <td>{isFavorite}</td>
            <td className={styles.toolsContainer}>
              <i className="fas fa-edit"
                onClick={() => navigate(`/dashboard/card-set-edit?id=${id}`)}
              >
              </i>
              <i className="fas fa-trash"
                onClick={() => dispatch(deleteCardSet(id))}
              >
              </i>
              <i className="fas fa-heart"
                onClick={() => dispatch(setFavoriteCardSet(id))}
                style={{ color: isFavorite ? "red" : null }}
              >
              </i>
            </td>
          </tr>
        )
      })
      }
    </>
  )

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link to={"/dashboard/card-set-create"}>
          <Button name="Create new Set" />
        </Link>
        <Link to={"/dashboard/card-set-folders"}>
          <Button name="folders" />
        </Link>
        <Link to={"/dashboard/card-set-favorites"}>
          <Button name="favorites" />
        </Link>
        <Link to={"/dashboard/card-set-recently"}>
          <Button name="recently" />
        </Link>
      </div>
      <table>
        <tbody>
          <tr className={styles.tr}>
            <th>Set Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Card count</th>
            <th>Folder</th>
            <th>Favorite</th>
            <th>Tools</th>
          </tr>
          {showCardSetTable()}
        </tbody>
      </table>
    </div>
  )
}

export default CardSetList;