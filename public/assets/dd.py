import os
from PIL import Image

def compress_and_resize_pngs(scale_factor=0.5):
    # Define the root directory (current working directory)
    root_dir = os.getcwd()
    
    # Define and create the output folder if it doesn't exist
    output_folder = os.path.join(root_dir, 'output')
    os.makedirs(output_folder, exist_ok=True)

    # List all files in the root directory
    for filename in os.listdir(root_dir):
        # Process only .png files (case insensitive)
        if filename.lower().endswith('.png'):
            file_path = os.path.join(root_dir, filename)
            try:
                # Open the image using Pillow
                with Image.open(file_path) as img:
                    # Calculate the new dimensions while preserving the aspect ratio
                    new_width = int(img.width * scale_factor)
                    new_height = int(img.height * scale_factor)
                    
                    # Resize the image with high-quality downsampling filter
                    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
                    
                    # Optional: if you want to reduce color depth, uncomment the following line
                    # resized_img = resized_img.convert("P", palette=Image.ADAPTIVE)
                    
                    # Define the output file path within the output folder
                    output_path = os.path.join(output_folder, filename)
                    
                    # Save the image with maximum PNG compression
                    resized_img.save(output_path, format='PNG', optimize=True, compress_level=9)
                    print(f"Processed: {filename} | New size: {new_width}x{new_height}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    # Adjust scale_factor (e.g., 0.5 for 50% of the original dimensions)
    compress_and_resize_pngs(scale_factor=0.5)
