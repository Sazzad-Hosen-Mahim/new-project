import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

const MedicineTable = () => {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader className="bg-[#184971]">
        <TableColumn className="bg-[#184971] font-bold text-white text-center border-r-1 py-3">
          Tablets
        </TableColumn>
        <TableColumn className="bg-[#184971] font-bold text-white text-center border-r-1 py-3">
          Total Price
        </TableColumn>
        <TableColumn className="bg-[#184971] font-bold text-white text-center border-r-1 py-3">
          Per Tablet
        </TableColumn>
        <TableColumn className="bg-[#184971] font-bold text-white text-center border-r-1 py-3">
          Add To Cart
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Tony Reichert
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            CEO
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Active
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Active
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Zoey Lang
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Technical Lead
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Paused
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Paused
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Jane Fisher
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Senior Developer
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Active
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Active
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="py-4 font-semibold text-center border-r-1">
            William Howard
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Community Manager
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Vacation
          </TableCell>
          <TableCell className="py-4 font-semibold text-center border-r-1">
            Vacation
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MedicineTable;
