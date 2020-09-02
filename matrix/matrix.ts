type Rows = number[][];
type Columns = number[][];

class Matrix {
  public rows: Rows;
  public columns: Columns;

  constructor(inputMatrix: string) {
    this.rows = this.createRows(inputMatrix);
    this.columns = this.createColumns(inputMatrix);
  }

  createRows(inputMatrix: string): Rows {
    const rowList = inputMatrix.split("\n");
    const matrix = this.createMatrix(rowList);

    return matrix;
  }

  createColumns(inputMatrix: string): Columns {
    const rows = this.createRows(inputMatrix);
    const columns = [];
    for (let i = 0; i < rows.length; i++) {
      columns.push(
        rows.map((row) => {
          return row[i];
        })
      );
    }
    return columns;
  }

  formatRow(row: string): number[] {
    const splitRow = row.split(" ");
    const formattedRow = splitRow.map((item) => {
      return parseInt(item);
    });

    return formattedRow;
  }

  createMatrix(rowList: string[]): Rows {
    const matrix = rowList.map((row) => {
      return this.formatRow(row);
    });

    return matrix;
  }
}

export default Matrix;
