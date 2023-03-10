import { Grid, Typography } from "@mui/material";
import React from "react";
import CardBusinessComponent from "./card/CardBusinessComponent";

export default function Cards({cards}) {

    // Action Bar functions
    const handleDelete = (id) => {
        console.log(`Card ${id} deleted`);
    }

    const handleEdit = (id) => {
        console.log(`Card ${id} is being edited`);
    }

    const handleLike = (id) => {
        console.log(`Card ${id} liked`);
    }

    return (
        <>
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item xc={12} s={6} md={4} lg={3} key={index}>
                        <CardBusinessComponent
                            card={card}
                            key={card._id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleLike={handleLike} />
                    </Grid>
                ))}
            </Grid>


        </>
    );
}