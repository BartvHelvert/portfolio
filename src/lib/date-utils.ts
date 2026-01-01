/**
 * Formats a date string to show only the date (no time)
 * @param dateString - Date string in various formats
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    
    // Format as "Month Day, Year" (e.g., "January 15, 2024")
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString; // Return original if parsing fails
  }
}

/**
 * Gets the ISO date string for the datetime attribute (date only, no time)
 * @param dateString - Date string in various formats
 * @returns ISO date string (e.g., "2024-01-15")
 */
export function getISODate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    
    // Return ISO date string (YYYY-MM-DD)
    return date.toISOString().split('T')[0];
  } catch {
    return dateString; // Return original if parsing fails
  }
}

