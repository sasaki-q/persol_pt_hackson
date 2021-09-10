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
import { AiFillPlusCircle, AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router"
import MyModal from "./MyModal";
import DocumentModal from "./DocumentModal";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(id, name, age,) {
    return { id, name, age,};
}

const rows = [
    createData(1, '田中　涼介', 80),
    createData(2, '佐々木　太郎', 37),
    createData(3, '健康　美代子', 75),
    createData(4, '松本　いよ', 80),
    createData(5, 'じんえ　涼子', 67),
    createData(6, '谷　涼子', 76),
    createData(7, '板　まさこ', 78),
    createData(8, '松村　まさお', 90),
    createData(9, '古身　たつき', 95),
    createData(10, '木村　元治', 87),
];

export default function UserTable({
    clients
}){
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [isDocumentOpen, setIsDocumentOpen] = useState<Boolean>(false);
    const [name, setName] = useState<string>(null)
    const [targetUid, setTargetUid] = useState<number>(null);
    const classes = useStyles();
    const router = useRouter();

    const handlePagePush = (id) => {
        router.push(`/main/confirm/${id}`)
    }

    const handleOpenModal = (id) => {
        setTargetUid(id)
        setIsOpen(true)
    }

    const handleOpenDocumentModal = (elm) => {
        setTargetUid(elm.id)
        setName(elm.name)
        setIsDocumentOpen(true)
    }

    return(
        <div className="mt-12 mb-16 w-10/12 mx-auto">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="inherit">名前</TableCell>
                                <TableCell align="inherit">年齢</TableCell>
                                <TableCell align="inherit">データ確認</TableCell>
                                <TableCell align="inherit">画像データ投稿</TableCell>
                                <TableCell align="inherit">書類作成</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clients.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" align="inherit">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="inherit">{row.age}</TableCell>
                                    <TableCell align="inherit" className="cursor-pointer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"　onClick={() => handlePagePush(row.id)}>
                                            <HiFolderOpen/>
                                        </button>
                                    </TableCell>
                                    <TableCell align="inherit" className="cursor-pointer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"　onClick={() => handleOpenModal(row.id)}>
                                            <AiFillPlusCircle/>
                                        </button>
                                    </TableCell>
                                    <TableCell align="inherit" className="cursor-pointer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleOpenDocumentModal(row)}>
                                            <AiFillEdit/>
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} targetUid={targetUid}/>
                    <DocumentModal isOpen={isDocumentOpen} setIsOpen={setIsDocumentOpen} targetUid={targetUid} name={name}/>
                </TableContainer>
            </div>
    )
}