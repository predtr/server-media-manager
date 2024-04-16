import { Header, Rating, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

interface ModalRendererProps {
    name: string;
    type: React.ReactNode;
    id: Int32Array;
    suggestions: void
  }

export function DownloadFileBrowse() {

    const fakeData = [
        [],
    ]

  return (
    <>
      <Table celled padded>
        <TableHeader>
          <TableRow>
            <TableHeaderCell singleLine>Name</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Suggestions</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Header as="h2" textAlign="center">
                A
              </Header>
            </TableCell>
            <TableCell singleLine>Power Output</TableCell>
            <TableCell>
              <Rating icon="star" defaultRating={3} maxRating={3} />
            </TableCell>
            <TableCell textAlign="right">
              80% <br />
              <a href="#">18 studies</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Header as="h2" textAlign="center">
                A
              </Header>
            </TableCell>
            <TableCell singleLine>Weight</TableCell>
            <TableCell>
              <Rating icon="star" defaultRating={3} maxRating={3} />
            </TableCell>
            <TableCell textAlign="right">
              100% <br />
              <a href="#">65 studies</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
