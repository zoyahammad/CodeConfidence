import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 80%;
  padding-top: 100px;
  padding-left: 100px;
  font-size: 16px;

  .datagrid {
    .MuiDataGrid-columnHeader,
    .MuiDataGrid-cell,
    .MuiDataGrid-footerContainer {
      font-size: 16px; /* Adjust the font size as needed */
      background-color: #FFFFFF;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

`;
