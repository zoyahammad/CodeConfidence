import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from './LeaderboardStyles';
import { columns } from '../../constants/constants';
import { rows } from '../../constants/constants';

const Leaderboard = () => {
    return (
        <Container>
            <DataGrid
                className="datagrid"
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </Container>
    );
}

export default Leaderboard;