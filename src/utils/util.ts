/** 
 * Utility Functions: reusable helper functions 
 * 
 * clsx() will merge class names conditionally (cleaner syntax)
 * twMerge() will merge Tailwind class names safely to avoid conflicts
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn () - Class name utility:
 * merge Tailwind CSS class names safely to avoid naming conflicts:
 * clsx() - handles conditional classes, arrays, objects
 * twMerge() - handles Tailwind naming conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * using getCurrentDateString() - todays date as YYYY-MM-DD 
 * 
 * returns: local date (not UTC) to match users expected format
 * could convert to UTC later if need but going to skip due to Midnight Bug (eg: 11:00 PM may be Tommorow in UTC)
 */
export function getCurrentDateString(): string {
    const now = new Date();
    const year = now.getFullYear();
    // format month: 09, 08, etc 
    // gets month as 0-11, so add 1 to get 1-12
    // use padStart() to add leading zero if less than 2 digits
    const month = String(now.getMonth() + 1).padStart(2, '0');
    //same thing for days eg: 02, 07, etc
    const day = String(now.getDate()).padStart(2, '0');
    //return formatted date string eg: 2025-12-23
    // REMEMBER TO USE BACKTICKS HERE!!! 
    return `${year}-${month}-${day}`;
}