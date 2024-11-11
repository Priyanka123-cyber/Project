import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-1 LPA", "1-3 LPA", "3-5 LPA"]
    },
];

const FilterCard = () => {
    return (
        <Box sx={{ width: '150px', marginLeft: '16px', padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>Filter Jobs</Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {filterData.map((data, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{data.filterType}</Typography>
                    <RadioGroup>
                        {data.array.map((item, idx) => (
                            <FormControlLabel
                                key={idx}
                                value={item}
                                control={<Radio />}
                                label={item}
                            />
                        ))}
                    </RadioGroup>
                </Box>
            ))}
        </Box>
    );
};

export default FilterCard;
