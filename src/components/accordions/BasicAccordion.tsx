import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const BasicAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandedChange = (isExpanded: boolean, panel: string) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(_e, isExpanded) => handleExpandedChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand Panel 1"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam libero quaerat
            quo tenetur expedita eveniet natus, ducimus dolorem quasi? Rem perferendis omnis harum
            provident earum quas. Quibusdam, consequatur earum!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(_e, isExpanded) => handleExpandedChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand Panel 2"
          aria-controls="pane2-content"
          id="pane2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero esse, ex deserunt
            molestias magni blanditiis rem commodi consequuntur autem adipisci illo voluptas, soluta
            in ea. Odio repellendus hic rem non.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(_e, isExpanded) => handleExpandedChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand Panel 3"
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo accusamus autem similique
            ab eveniet explicabo sapiente. Veniam, fuga optio quas pariatur minus, officiis quis sit
            veritatis, dolorum dicta aspernatur minima.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BasicAccordion;
