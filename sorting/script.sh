#!/bin/bash

output_file="output.log"
# > "$output_file"

for file in *.js; do
    if [ -f "$file" ]; then
        echo "Running $file..." >> "$output_file"
        node "$file" >> "$output_file" 2>&1

        echo "-----------------------------------" >> "$output_file"
    fi
done
echo "All scripts have been executed. Check $output_file for results."
