import { Wrapper, ListItem } from "./Pagination.styles";

const Pagination = (props) => {
  const { current = 1, total, onChange } = props;

  const goToNextPage = () => {
    if (current < total) {
      onChange && onChange({ current: current + 1 });
    }
  };

  const goToPrevPage = () => {
    if (current > 1 && current <= total) {
      onChange && onChange({ current: current - 1 });
    }
  };

  const goToSelectedPage = (i) => {
    if (current !== i) {
      onChange && onChange({ current: i });
    }
  };

  const displayPageNums = (current) => {
    let pageNumbers = [];
    for (let i = 1; i <= total; i++) {
      pageNumbers.push(i);
    }
    if (current === 1) {
      const visiblePages = pageNumbers.slice(current - 1, current + 9);
      return visiblePages;
    } else if (1 < current) {
      const visiblePages = pageNumbers.slice(current - 2, current + 8);
      return visiblePages;
    }
  };
  return (
    <Wrapper>
      <ListItem onClick={goToPrevPage} id="prev-btn">
        &lt;
      </ListItem>
      {displayPageNums(current).map((item) => (
        <ListItem
          key={item}
          onClick={() => goToSelectedPage(item)}
          className={current === item ? "active" : ""}
        >
          {item}
        </ListItem>
      ))}
      <ListItem onClick={goToNextPage} id="next-btn">
        &gt;
      </ListItem>
    </Wrapper>
  );
};

export default Pagination;
