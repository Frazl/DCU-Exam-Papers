cd ./python
python scrape.py 
move ./examPapers.json ../src/
echo "Successfully scraped and moved JSON"
cd ../
echo "Rebuilding Site"
npm run build 
