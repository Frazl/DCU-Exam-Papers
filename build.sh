cd ./python
python3 scrape.py 
mv ./examPapers.json ../src/
echo "Successfully scraped and moved JSON"
cd ../
echo "Rebuilding Site"
npm run build