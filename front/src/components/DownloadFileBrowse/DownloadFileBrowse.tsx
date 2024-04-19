import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Header,
  Icon,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";

interface ModalRendererProps {
  name: string;
  type: React.ReactNode;
  id: number;
  suggestions?: void;
}

export function DownloadFileBrowse() {
  var fakeData: ModalRendererProps[] = [
    {
      name: "3.Jours.Max.2023.FRENCH.HDR.DV.2160p.WEB-DL.H265-Slay3R-Wawacity.city.mkv",
      type: "Movie",
      id: 218,
    },
    {
      name: "Pig.2021.MULTi.TRUEFRENCH.1080p.BluRay.DTS.x264-Wawacity.blue.mkv",
      type: "Movie",
      id: 131,
    },
    {
      name: "Dune.2021.VOSTFR.HDR.2160p.WEB.x265-RiPiT-www2.tirexo.work.mkv",
      type: "Movie",
      id: 22,
    },
    {
      name: "The.Princess.and.the.Bodyguard.2023.MULTi.1080p.WEB.x264-FW.Wawacity.rocks.mkv",
      type: "Movie",
      id: 211,
    },
    {
      name: "Le.Tresor.du.Petit.Nicolas.2021.FRENCH.1080p.BluRay.DTS-HD.MA.x264-Wawacity.ink.mkv",
      type: "Movie",
      id: 145,
    },
    {
      name: "Dunkirk.2017.VFF.VFQ.2160p.BluRay.4K.HDR.DTS-HD.MA.AC3.x265-wawacity.ec-wawacity.ec.mkv",
      type: "Movie",
      id: 168,
    },
    {
      name: "Fantastic.Beasts.The.Secrets.of.Dumbledore.2022.4K.MULTi.VFF.2160p.HDR.WEB.EAC3.x265-Wawacity.blue.mkv",
      type: "Movie",
      id: 74,
    },
    {
      name: "Scream.2022.FANSUB.VOSTFR.1080p.mHD.WEBRip.X264.DD2.0-NIKOo-www2.tirexo.art.mkv",
      type: "Movie",
      id: 53,
    },
    {
      name: "Insidious.The.Red.Door.2023.MULTi.TRUEFRENCH.1080p.HDLight.H264.Wawacity.pink.mkv",
      type: "Movie",
      id: 173,
    },
    {
      name: "Jackass.Forever.2022.MULTi.1080p.BluRay.x264.AC3.Wawacity.blue.mkv",
      type: "Movie",
      id: 80,
    },
  ];

  const options = [
    {
      key: 1,
      text: "Option 1",
      value: 1,
      content: <Header content="Option 1" subheader="(1996)" />,
    },
    {
      key: 2,
      text: "Option 2",
      value: 2,
      content: <Header content="Option 2" subheader="(2000)" />,
    },
    {
      key: 3,
      text: "Option 3",
      value: 3,
      content: <Header content="Option 3" subheader="(2010)" />,
    },
  ];

  let tableLines = fakeData.map(function (file) {
    return (
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>
          <Input fluid value={file.name} disabled={true} />
        </TableCell>
        <TableCell>{file.type}</TableCell>
        <TableCell>{file.id}</TableCell>
        <TableCell>
          <Dropdown
            selection
            fluid
            options={options}
            placeholder="Choose an option"
          />
        </TableCell>
        <TableCell>
          <Button icon color="green">
            <Icon name="refresh" />
          </Button>
          <Button icon color="red">
            <Icon name="close" />
          </Button>
          <Button icon>
            <Icon name="world" />
          </Button>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <Container fluid>
        <Table celled striped >
          <TableHeader>
            <TableRow>
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell width={12}>Name</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Suggestions</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>{tableLines}</TableBody>
        </Table>
      </Container>
    </>
  );
}
