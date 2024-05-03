import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

interface BasicListProps<T> {
  items: T[]; // Generic array type for items
  renderItem: (item: T) => JSX.Element; // Function to render each item
  // TODO: Return previous state of the function
}

export default function BasicList<T>({ items, renderItem }: BasicListProps<T>) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}>
      <nav aria-label="items list">
        <List>
          {items.map((item) => (
            <ListItem key={JSON.stringify(item)}>
              <ListItemButton
                sx={{
                  bgcolor: 'text.secondary',
                  borderRadius: '8px',
                  margin: '4px 0',
                }}
              >
                {renderItem(item)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
