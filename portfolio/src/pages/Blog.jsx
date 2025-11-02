const blogPosts = [
  {
    id: 1,
    slug: "fix-dual-boot-recover-ubuntu-grub-after-windows-update",
    title: "FIX Dual Boot: Recover Ubuntu GRUB After Windows Update",
    description: "Step-by-step guide to restore the GRUB bootloader after a Windows update breaks your Ubuntu dual boot. Boot both OS again without losing data",
    date: "14 June, 2025",
    categories: ["Dual Boot", "GRUB", "Linux"],
    content: `If you're using a dual-boot system with Ubuntu and Windows, there's a chance you've faced this problem. after a Windows update, your system suddenly boots straight into Windows, and Ubuntu is nowhere to be found. You may even see a scary error message like this one:

Failed to open \\EFI\\UBUNTU\\grubx64.efl - Not Found
Failed to load image \\EFI\\UBUNTU\\grubx64.efl: Not Found
start_image() returned Not Found, falling back to default loader

Understanding the Problem
Windows updates sometimes overwrite the boot configuration, prioritizing Windows Boot Manager over GRUB.

Solution Steps
1. Boot from a Ubuntu Live USB
2. Open Terminal and identify your Ubuntu partition
3. Mount the partition and reinstall GRUB
4. Update boot order in BIOS/UEFI

The Fix
First, boot from your Ubuntu Live USB. Once you're in the live environment, open a terminal and run:
sudo fdisk -l

This will show all your partitions. Look for your Ubuntu partition (usually labeled as ext4).

Next, mount your Ubuntu partition:
sudo mount /dev/sdXY /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys

Replace sdXY with your actual partition (e.g., sda5).

Now, chroot into your Ubuntu installation:
sudo chroot /mnt

Install and update GRUB:
grub-install /dev/sdX
update-grub

Replace sdX with your disk (not partition), e.g., sda.

Finally, restart your computer and you should see the GRUB menu again!`
  },
  {
    id: 2,
    slug: "getting-started-with-react-router",
    title: "Getting Started with React Router",
    description: "Learn how to implement client-side routing in React applications using React Router",
    date: "10 June, 2025",
    categories: ["React", "Web Development", "JavaScript"],
    content: `React Router is the standard routing library for React applications. It enables navigation between different components and maintains browser history.

Installation
First, install React Router in your project:
npm install react-router-dom

Basic Setup
Wrap your app with BrowserRouter and define routes using the Routes and Route components.

Example:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

Navigation
Use the Link component for navigation without page reloads:
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>

Dynamic Routes
Create dynamic routes using URL parameters:
<Route path="/blog/:slug" element={<BlogPost />} />

Then access the parameter using useParams():
const { slug } = useParams();`
  },
  {
    id: 3,
    slug: "tailwind-css-tips-and-tricks",
    title: "Tailwind CSS: Tips and Tricks",
    description: "Useful tips and tricks to make the most out of Tailwind CSS in your projects",
    date: "5 June, 2025",
    categories: ["CSS", "Tailwind", "Web Development"],
    content: `Tailwind CSS has revolutionized the way we write CSS. Here are some advanced tips to level up your Tailwind game.

Custom Utilities
You can extend Tailwind with custom utilities in your tailwind.config.js file:

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#1DA1F2',
      }
    }
  }
}

Dark Mode
Tailwind makes implementing dark mode incredibly easy with the 'dark:' variant:

<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content here
</div>

Responsive Design
Use responsive prefixes for different breakpoints:
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

Custom Components
Create reusable component classes using @apply:

@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}`
  }
];

import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <main className="pt-20 pb-16 mt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">My Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.categories.join(", ")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}