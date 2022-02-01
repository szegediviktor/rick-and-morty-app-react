import { useState } from "react";
import { Wrapper, ListItem } from "./Pagination.styles";

const Pagination = (props) => {
  const { perPage, current = 1, total, onChange } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (current < total) {
      onChange && onChange({ current: current + 1 });
    }
  };

  const goToPrevPage = () => {
    if (current > 1 && current <= total) {
      const start = (current - 2) * perPage;
      const end = (current - 1) * perPage;
      onChange && onChange({ start, end, current: current - 1 });
    }
  };

  const goToSelectedPage = (i) => {
    if (current !== i) {
      const start = (i - 1) * perPage;
      const end = i * perPage;
      onChange && onChange({ start, end, current: i });
    }
  };

  const displayPageNums = (current) => {
    let pageNumbers = [];
    for (let i = current; i <= total; i++) {
      pageNumbers.push(i);
    }
    if (current === 1) {
      const visiblePages = pageNumbers.slice(current - 1, current + 9);
      return visiblePages;
    } else if (1 < current) {
      const visiblePages = pageNumbers.slice(current - 1, current + 5);
      return visiblePages;
    }
  };
  return (
    <Wrapper>
      <ListItem onClick={goToPrevPage}>&lt;</ListItem>
      {displayPageNums(current).map((item) => (
        <ListItem
          key={item}
          onClick={() => goToSelectedPage(item)}
          className={current === item ? "active" : ""}
        >
          {item}
        </ListItem>
      ))}
      <ListItem onClick={goToNextPage}>&gt;</ListItem>
    </Wrapper>
  );
};

export default Pagination;

//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <Nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <a onClick={() => paginate(number)} href="!#">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </Nav>
//   );
