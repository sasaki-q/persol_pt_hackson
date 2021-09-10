import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { HiFolderOpen } from "react-icons/hi";
import { useRouter } from "next/router"
import { FirestoreDataType } from "../hooks/useFirebaseFirestore";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function DataTable(datas){
    const classes = useStyles();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const [dataInfo, setDataInfo] = useState<FirestoreDataType>(null);

    let tableDatas: FirestoreDataType[] = datas.datas;

    const handleOpenView = (id) => {
        window.open(`http://localhost:3000/main/window/${id}`);
    }

    return(
        <div className="mt-12 mb-16 w-10/12 mx-auto">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="inherit">書類の説明</TableCell>
                                <TableCell align="inherit">日付</TableCell>
                                <TableCell align="inherit">データを確認する</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableDatas.map((row) => (
                                <TableRow key={row.uid}>
                                    <TableCell component="th" scope="row" align="inherit">
                                        {row.documentType}
                                    </TableCell>
                                    <TableCell align="inherit">{row.createdAt}</TableCell>
                                    <TableCell align="inherit" className="cursor-pointer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"　onClick={() => handleOpenView(row.id)}>
                                            <HiFolderOpen/>
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
    )
}