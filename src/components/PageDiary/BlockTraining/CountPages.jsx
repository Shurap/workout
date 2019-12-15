import React from 'react';
import styles from './CountPages.module.scss';
import { getArrayPages } from '../../../selectors/getDataToCountPages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeActivePage } from '../../../redux/actions/actionCountVisibleExercises';

const CountPages = (props) => {

  const onClick = (element) => {
    props.changeActivePage(element);
  }

  const pages = props.currentArrayPages.map((element, index) => {
    return (
      <span
        key={index}
        className={(element === props.currentActivePage) ? styles.selectedPage : styles.unSelectedPage}
        onClick={() => onClick(element)}
      >
        {element}
      </span>
    )
  });

  return (
    <div className={styles.countPages}>
      {pages}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentArrayPages: getArrayPages(state),
  currentActivePage: state.countVisibleExercises.activePage,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeActivePage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CountPages);