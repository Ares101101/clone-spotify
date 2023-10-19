import LibraryIcon from '../icons/Librery.astro';
import HomeIcon from '../icons/Home.astro';
import SearchIcon from '../icons/Search.astro';
import SideMenuItems from '../components/SideMenuItems.astro';
import SideMenuCard from '../components/SideMenuItems.astro';
import { playlists } from '../lib/data';

<Fragment>
<nav class="flex flex-col flex-1 gap-2">
<div class="bg-zinc-900 rounded-lg p-2">
<ul>
<SideMenuItems href="/">
<HomeIcon />
Inicio
</SideMenuItems>
<SideMenuItems href="/">
<SearchIcon />
Buscar
</SideMenuItems>
</ul>
</div>
<div class="bg-zinc-900 rounded-lg p-2  flex-1">
<ul>
<SideMenuItems href="/">
<LibraryIcon />
Tu biblioteca
</SideMenuItems>
{playlists.map(pl => <Fragment><SideMenuCard playlist={pl} /></Fragment>)}
</ul>
</div>
</nav>

</Fragment>;
