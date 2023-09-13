import { useState } from "react";
import { Stack, Card, Divider, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function WorkoutCard({ cleanedText }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Stack sx={{ p: 2, width: "100%" }}>
            <Card spacing={1} sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Ever since I started working out properly (Summer '22), I have been
                    keeping a dutiful log of all my workouts (using the iPhone Notes app 🤓).
                    This log is automatically synced to the Notes app on my MacBook and will
                    (hopefully) be updated daily.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    The data flow for this looks something like this.
                    Update log on iPhone - Sync Notes App on MacBook - Run script to extract note and upload to Github as txt.
                </Typography>
                <Typography sx={{ fontStyle: "italic" }} variant="subtitle1" gutterBottom>
                    PS: I have found that tracking your workouts is not only a good way to track your
                    progress at the gym but is also a good intrinsic motivator to workout - you want
                    to see your log grow!
                </Typography>
                <Divider mt={2} />

                {/* Click-to-expand section */}
                <IconButton
                    onClick={toggleExpand}
                    sx={{ marginLeft: -2 }}
                >
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>

                <Collapse in={isExpanded}>
                    {cleanedText && (
                        <div dangerouslySetInnerHTML={{ __html: cleanedText }} />
                    )}
                </Collapse>
            </Card>
        </Stack>
    );
}

export default WorkoutCard;
